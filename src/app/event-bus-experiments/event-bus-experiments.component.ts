import { Component, OnInit } from '@angular/core';
import { store, Observer, initializeLessonsList } from './app-data';
import { testLessons } from '../shared/model/test.lessons';
import { Lesson } from '../shared/model/lesson';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {
  private lessons: Lesson[] = [];

  constructor() { }

  ngOnInit() {
    console.log('Top level component broadcasted all lessons');
    store.initializeLessonsList(testLessons.slice(0));
    setTimeout(() => {
      const newLesson = {
        id: Math.random(),
        description: 'New lesson'
      };
      store.addLesson(newLesson);
    }, 5000);

  }


  addLesson(lessonText: string) {
    const newLesson = {
      id: Math.random(),
      description: lessonText
    };
    store.addLesson(newLesson);
  }

}
