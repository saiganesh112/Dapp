export const idlFactory = ({ IDL }) => {
  const Student = IDL.Record({
    'subjects' : IDL.Nat32,
    'name' : IDL.Text,
    'total_marks' : IDL.Nat32,
  });
  return IDL.Service({
    'add_student' : IDL.Func([Student], [], []),
    'delete_student' : IDL.Func([IDL.Text], [], []),
    'get_student' : IDL.Func([IDL.Text], [IDL.Opt(Student)], ['query']),
    'list_students' : IDL.Func([], [IDL.Vec(Student)], ['query']),
    'update_student' : IDL.Func([Student], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
