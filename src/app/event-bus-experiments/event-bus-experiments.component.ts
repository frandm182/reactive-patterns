import { Component, OnInit } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVALIABLE, ADD_NEW_LESSON } from './event-bus';
import { testLessons } from '../shared/model/test.lessons';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {
  lessons: Lesson[] = [];

  constructor() { }

  ngOnInit() {
    console.log('Top level component broadcasted all lessons');
    this.lessons = testLessons.slice(0);
    globalEventBus.notifyObserver(LESSONS_LIST_AVALIABLE, this.lessons);

    setTimeout(() => {
      this.lessons.push({
        id: Math.random(),
        description: 'New lesson arriving'
      });
      globalEventBus.notifyObserver(LESSONS_LIST_AVALIABLE, this.lessons);
    }, 10000);
  }

  addLesson(lessonText: string) {
    globalEventBus.notifyObserver(ADD_NEW_LESSON, lessonText);
  }

}
