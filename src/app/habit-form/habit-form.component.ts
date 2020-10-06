import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HABITS } from '../data/habits';
import { Habit } from '../models/habit';

@Component({
  selector: 'app-habit-form',
  templateUrl: './habit-form.component.html',
  styleUrls: ['./habit-form.component.scss'],
})
export class HabitFormComponent implements OnInit {
  habitForm = new FormGroup({
    name: new FormControl(''),
    frequency: new FormControl(''),
    description: new FormControl(''),
  });

  editingIndex: number;

  public habits: Habit[];

  constructor() {}

  ngOnInit(): void {
    this.habits = HABITS;
  }

  public onSubmit() {
    const habit = this.habitForm.value as Habit;

    this.habits.push(this.habitForm.value as Habit);
    this.exitForm();
  }

  public setEditForm(habit: Habit, index: number) {
    this.habitForm.patchValue({
      name: habit.name,
      frequency: habit.frequency,
      description: habit.description,
    });
    this.editingIndex = index;
  }

  exitForm() {
    this.habitForm.reset();
  }
}
