create table property (
  property_id serial primary key,
  name text,
  address text,
  city text,
  state text,
  zipcode text
);

insert into property (name,address,city,state,zipcode)
values ('example villa', '123 tester way', 'somwheresville', 'oklahoma', '69801');