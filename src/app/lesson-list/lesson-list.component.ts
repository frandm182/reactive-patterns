
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Observer, store } from '../event-bus-experiments/app-data';
import { Lesson } from '../shared/model/lesson';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements  Observer, OnInit {

  lessons: Lesson[] = [];

  ngOnInit() {
    store.lessonList$.subscribe(this);
  }

  next(data: Lesson[]) {
    console.log('Lesson list component received data...');
    this.lessons = data;
  }

  toggleLessonViewed(lesson: Lesson) {
    console.log('toggling lesson...');
    store.toggleLessonViewed(lesson);
  }

  delete(deleted: Lesson) {
    store.deleteLesson(deleted);
  }

}
