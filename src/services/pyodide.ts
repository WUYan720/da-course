import { loadPyodide, type PyodideInterface } from 'pyodide';

let pyodide: PyodideInterface | null = null;
let isLoading = false;

export async function initPyodide(): Promise<PyodideInterface> {
  if (pyodide) {
    return pyodide;
  }

  if (isLoading) {
    // Wait for the existing loading to finish
    return new Promise((resolve) => {
      const checkInterval = setInterval(() => {
        if (pyodide) {
          clearInterval(checkInterval);
          resolve(pyodide);
        }
      }, 100);
    });
  }

  isLoading = true;

  try {
    pyodide = await loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.29.3/full/',
    });

    // Load common packages
    await pyodide.loadPackage(['micropip']);
    
    // Try to load pandas and numpy using micropip if they aren't included
    try {
      const micropip = pyodide.pyimport('micropip');
      await micropip.install('pandas numpy matplotlib');
    } catch (e) {
      console.log('Failed to install via micropip, falling back to packages', e);
    }

    // Configure matplotlib to render in the browser
    pyodide.runPython(`
      import numpy as np
      import sys
      sys.path.insert(0, '/')
      
      # Configure matplotlib for headless environment
      import matplotlib
      matplotlib.use('Agg')
    `);

    isLoading = false;
    return pyodide;
  } catch (error) {
    isLoading = false;
    console.error('Failed to initialize Pyodide:', error);
    throw error;
  }
}

export async function runPythonCode(code: string): Promise<{ success: boolean; result: string; error?: string }> {
  try {
    const py = await initPyodide();

    // Capture stdout and stderr
    py.runPython(`
      import io
      import sys

      # Capture output
      stdout_buffer = io.StringIO()
      stderr_buffer = io.StringIO()
      sys.stdout = stdout_buffer
      sys.stderr = stderr_buffer
    `);

    // Run user code
    let result: string = '';
    try {
      // Run code and capture return value
      const returnValue = await py.runPythonAsync(code);
      if (returnValue !== undefined && returnValue !== null) {
        result = String(returnValue);
      }
    } finally {
      // Get captured output
      py.runPython(`
        stdout_content = stdout_buffer.getvalue()
        stderr_content = stderr_buffer.getvalue()
        sys.stdout = sys.__stdout__
        sys.stderr = sys.__stderr__
      `);
      const stdout = py.globals.get('stdout_content');
      const stderr = py.globals.get('stderr_content');

      if (stdout) {
        result = stdout + (result ? '\n' + result : '');
      }
      if (stderr) {
        return {
          success: false,
          result: result,
          error: stderr,
        };
      }
    }

    return {
      success: true,
      result: result || '代码执行成功！',
    };
  } catch (error) {
    return {
      success: false,
      result: '',
      error: String(error),
    };
  }
}
