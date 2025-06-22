use candid::{CandidType, Deserialize};
use ic_cdk_macros::{query, update};
use std::cell::RefCell;
use std::collections::HashMap;

#[derive(CandidType, Deserialize, Clone)]
pub struct Student {
    pub name: String,
    pub total_marks: u32,
    pub subjects: u32,
}

thread_local! {
    static STUDENTS: RefCell<HashMap<String, Student>> = RefCell::new(HashMap::new());
}

#[query]
fn list_students() -> Vec<Student> {
    STUDENTS.with(|s| s.borrow().values().cloned().collect())
}

#[update]
fn add_student(student: Student) {
    STUDENTS.with(|s| s.borrow_mut().insert(student.name.clone(), student));
}

#[update]
fn delete_student(name: String) {
    STUDENTS.with(|s| s.borrow_mut().remove(&name));
}
