create table if not exists users (
  id integer primary key,
  name text not null,
  email text not null unique,
  password text not null,
  role text not null,
  department text,
  avatar text,
  is_approved boolean default true,
  index_number text
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

alter table users disable row level security;
alter table courses disable row level security;
alter table assignments disable row level security;
alter table submissions disable row level security;
alter table materials disable row level security;

-- In case RLS cannot be disabled on some Supabase tiers/configs, we also add "allow all" public policies:
drop policy if exists "Allow public access" on users;
create policy "Allow public access" on users for all using (true) with check (true);

drop policy if exists "Allow public access" on courses;
create policy "Allow public access" on courses for all using (true) with check (true);

drop policy if exists "Allow public access" on assignments;
create policy "Allow public access" on assignments for all using (true) with check (true);

drop policy if exists "Allow public access" on submissions;
create policy "Allow public access" on submissions for all using (true) with check (true);

drop policy if exists "Allow public access" on materials;
create policy "Allow public access" on materials for all using (true) with check (true);


-- Departments management table
create table if not exists departments (
  id serial primary key,
  name text not null unique
);

alter table departments disable row level security;
drop policy if exists "Allow public access" on departments;
create policy "Allow public access" on departments for all using (true) with check (true);

-- Migration steps for existing databases:
alter table users add column if not exists is_approved boolean default true;
alter table users add column if not exists index_number text;
