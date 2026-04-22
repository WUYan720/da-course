import { loadPyodide } from 'pyodide';

class PyodideService {
  private pyodide: any = null;
  private isLoading: boolean = false;
  private loadPromise: Promise<any> | null = null;

  // 加载Pyodide
  async load() {
    if (this.pyodide) {
      return this.pyodide;
    }

    if (this.isLoading) {
      return this.loadPromise;
    }

    this.isLoading = true;
    this.loadPromise = new Promise(async (resolve, reject) => {
      try {
        // 使用最新版本的Pyodide
        this.pyodide = await loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.29.3/full/'
        });

        // 预装所有需要的库
        await this.pyodide.loadPackage([
          'pandas', 
          'numpy', 
          'matplotlib', 
          'seaborn', 
          'scikit-learn', 
          'mlxtend'
        ]);

        // 配置matplotlib以在浏览器中显示
        this.pyodide.runPython(`
          import matplotlib.pyplot as plt
          import matplotlib
          matplotlib.use('Agg')
          plt.rcParams['font.sans-serif'] = ['WenQuanYi Zen Hei']
          plt.ioff()
        `);

        resolve(this.pyodide);
      } catch (error) {
        console.error('Failed to load Pyodide:', error);
        reject(error);
      } finally {
        this.isLoading = false;
      }
    });

    return this.loadPromise;
  }

  // 运行Python代码
  async runCode(code: string): Promise<{ output: string; error: string; charts?: string[] }> {
    try {
      await this.load();

      // 重定向标准输出
      let output = '';
      let error = '';
      const charts: string[] = [];

      this.pyodide.setStdout((text: string) => {
        output += text;
      });

      this.pyodide.setStderr((text: string) => {
        error += text;
      });

      // 运行代码
      this.pyodide.runPython(`
        import matplotlib.pyplot as plt
        import io
        import base64

        # 捕获图表
        def show_chart():
            buffer = io.BytesIO()
            plt.savefig(buffer, format='png')
            buffer.seek(0)
            image_base64 = base64.b64encode(buffer.read()).decode('utf-8')
            plt.close()
            return image_base64

        # 替换plt.show()
        original_show = plt.show
        plt.show = lambda: show_chart()

        # 运行用户代码
        ${code}
        
        # 恢复原始plt.show
        plt.show = original_show
      `);

      // 检查是否有图表生成
      try {
        const chartData = this.pyodide.runPython('show_chart()');
        if (chartData) {
          charts.push(`data:image/png;base64,${chartData}`);
        }
      } catch (e) {
        // 没有图表生成，忽略错误
      }

      return { output, error, charts };
    } catch (err: any) {
      return { output: '', error: err.message };
    }
  }

  // 获取Pyodide实例
  getPyodide() {
    return this.pyodide;
  }

  // 检查是否已加载
  isLoaded() {
    return this.pyodide !== null;
  }

  // 检查是否正在加载
  isLoadingStatus() {
    return this.isLoading;
  }
}

export const pyodideService = new PyodideService();
