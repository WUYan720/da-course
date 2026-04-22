import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Guide from '../views/Guide.vue';
import Courses from '../views/Courses.vue';
import CourseDetail from '../views/CourseDetail.vue';
import LessonDetail from '../views/LessonDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/guide',
    name: 'Guide',
    component: Guide
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/courses/:courseId',
    name: 'CourseDetail',
    component: CourseDetail,
    props: true
  },
  {
    path: '/courses/:courseId/chapters/:chapterId/lessons/:lessonId',
    name: 'LessonDetail',
    component: LessonDetail,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
