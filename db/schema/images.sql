create table if not exists public.images(
id serial not null primary key unique,
user_id int8 not null,
memory_id int8 not null,
image varchar,
foreign key(memory_id) references public.memories(id) on delete cascade,
foreign key(user_id) references public.users(id) on delete cascade
);