create table if not exists public.memories(
id serial not null primary key unique,
user_id int4 not null,
"name" varchar,
description varchar,
created TIMESTAMPTZ DEFAULT NOW(),
foreign key(user_id) references public.users(id) on delete cascade
);