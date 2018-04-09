import { Component, OnInit } from '@angular/core';
import { store, Observer } from '../event-bus-experiments/app-data';
import { Lesson } from '../shared/model/lesson';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'lesson-counter',
  templateUrl: './lesson-counter.component.html',
  styleUrls: ['./lesson-counter.component.css']
})
export class LessonCounterComponent implements Observer, OnInit {
  lessonsCounter = 0;
  ngOnInit() {
    console.log('Lessons list component is registerred as observer');
    store.lessonList$.subscribe(this);
  }

  next(data: Lesson[]) {
    console.log('Counter component received data...');
    this.lessonsCounter = data.length;
  }

}
