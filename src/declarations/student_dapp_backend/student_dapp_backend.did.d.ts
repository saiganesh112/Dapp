import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Student {
  'subjects' : number,
  'name' : string,
  'total_marks' : number,
}
export interface _SERVICE {
  'add_student' : ActorMethod<[Student], undefined>,
  'delete_student' : ActorMethod<[string], undefined>,
  'get_student' : ActorMethod<[string], [] | [Student]>,
  'list_students' : ActorMethod<[], Array<Student>>,
  'update_student' : ActorMethod<[Student], undefined>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
