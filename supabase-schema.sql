create table if not exists users (
  id integer primary key,
  name text not null,
  email text not null unique,
  password text not null,
  role text not null,
  department text,
  avatar text
);

create table if not exists courses (
  id integer primary key,
  code text not null,
  name text not null,
  dept text,
  lecturer_id integer,
  student_ids integer[],
  credits integer,
  semester text,
  description text
);

create table if not exists assignments (
  id integer primary key,
  course_id integer not null,
  title text not null,
  description text,
  due_date text,
  max_points integer,
  created_by integer
);

create table if not exists submissions (
  id integer primary key,
  assignment_id integer not null,
  student_id integer not null,
  content text,
  submitted_at text,
  grade integer,
  feedback text
);

create table if not exists materials (
  id integer primary key,
  course_id integer not null,
  title text not null,
  type text not null,
  file_name text,
  uploaded_by integer,
  uploaded_at text,
  size text
);
