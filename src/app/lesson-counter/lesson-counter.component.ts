import { Component, OnInit } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVALIABLE, ADD_NEW_LESSON } from '../event-bus-experiments/event-bus';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'lesson-counter',
  templateUrl: './lesson-counter.component.html',
  styleUrls: ['./lesson-counter.component.css']
})
export class LessonCounterComponent {
  lessonsCounter = 0;
  constructor() {
    console.log('Lessons list component is registerred as observer');
    globalEventBus.registerObserver(LESSONS_LIST_AVALIABLE, this);
    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify: lessonText => this.lessonsCounter += 1 });
  }

  notify(data: Lesson[]) {
    console.log('Counter component received data...');
    this.lessonsCounter = data.length;
  }

}
