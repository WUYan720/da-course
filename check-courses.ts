import { courses } from './src/data/courses';

console.log('课程数量:', courses.length);
console.log('课程列表:');
courses.forEach((course, index) => {
  console.log(`${index + 1}. ${course.title} (${course.id})`);
  console.log(`   描述: ${course.description}`);
  console.log(`   章节数: ${course.modules.length}`);
  console.log('');
});

console.log('最后一个课程:', courses[courses.length - 1].title);