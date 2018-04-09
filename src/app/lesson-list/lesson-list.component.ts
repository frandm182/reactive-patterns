import { Component, OnInit } from '@angular/core';
import { globalEventBus, Observer, LESSONS_LIST_AVALIABLE, ADD_NEW_LESSON } from '../event-bus-experiments/event-bus';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements  Observer {

  lessons: Lesson[] = [];

  constructor() {
    console.log('Lessons list component is registerred as observer');
    globalEventBus.registerObserver(LESSONS_LIST_AVALIABLE, this);
    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify: lessonText => {
        this.lessons.push({
          id: Math.random(),
          description: lessonText,
          duration: '8:00'
        })
      }
    });
  }

  notify(data: Lesson[]) {
    console.log('Lesson list component received data...');
    this.lessons = data;
  }

  toggleLessonViewed(lesson: Lesson) {
    console.log('toggling lesson...');
    lesson.completed = !lesson.completed;
  }

}
