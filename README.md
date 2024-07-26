# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh






------------------------------------------------------------------------------
Django QuerySet Methods and Functions
QuerySet Methods that Return Another QuerySet
filter()

Description: Filters the QuerySet based on the given criteria.
Example: Person.objects.filter(age__gt=20)
Explanation: Ye QuerySet un logon ko filter karega jinke age 20 se zyada hai.
exclude()

Description: Excludes records that match the given criteria.
Example: Person.objects.exclude(age__lt=20)
Explanation: Ye QuerySet un logon ko exclude karega jinke age 20 se kam hai.
annotate()

Description: Adds aggregate values to each record.
Example: Book.objects.annotate(num_authors=Count('authors'))
Explanation: Har book ke sath authors ki count add karega.
alias()

Description: Creates an alias for a field or value in the QuerySet.
Example: Book.objects.values('title').alias(alias_title=F('title'))
Explanation: title field ko alias_title naam se refer karega.
order_by()

Description: Orders the QuerySet based on given fields.
Example: Person.objects.order_by('age')
Explanation: Logon ko unke age ke basis pe ascending order me sort karega.
reverse()

Description: Reverses the order of the QuerySet.
Example: Person.objects.order_by('age').reverse()
Explanation: Age ke ascending order ko reverse karega, yani descending order me sort karega.
distinct()

Description: Removes duplicate records from the QuerySet.
Example: Person.objects.distinct()
Explanation: Duplicate records ko remove karega aur unique records dikhayega.
values()

Description: Returns a QuerySet of dictionaries, where each dictionary represents an object.
Example: Person.objects.values('name', 'age')
Explanation: Sirf name aur age fields ke sath dictionaries return karega.
values_list()

Description: Returns a QuerySet of tuples, where each tuple represents an object.
Example: Person.objects.values_list('name', 'age')
Explanation: name aur age fields ke sath tuples return karega.
dates()

Description: Returns a QuerySet of date objects for a given field.
Example: Event.objects.dates('event_date', 'year')
Explanation: event_date field ke saare unique years return karega.
datetimes()

Description: Returns a QuerySet of datetime objects for a given field.
Example: Event.objects.datetimes('event_date', 'month')
Explanation: event_date field ke saare unique months ke datetime objects return karega.
none()

Description: Returns an empty QuerySet.
Example: Person.objects.none()
Explanation: Empty QuerySet return karega, koi record nahi milega.
all()

Description: Returns all records in the QuerySet.
Example: Person.objects.all()
Explanation: Database se sabhi records ko return karega.
union()

Description: Combines QuerySets with duplicate records removed.
Example: Person.objects.filter(age__lt=30).union(Person.objects.filter(age__gte=30))
Explanation: Age ke basis pe do QuerySets ko combine karega, duplicate records ko remove karega.
intersection()

Description: Finds the common records between two QuerySets.
Example: Person.objects.filter(age__lt=30).intersection(Person.objects.filter(name__icontains='John'))
Explanation: Common records ko find karega jo age 30 se kam hain aur name me 'John' contain karta hai.
difference()

Description: Finds records that are in the first QuerySet but not in the second.
Example: Person.objects.filter(age__lt=30).difference(Person.objects.filter(name__icontains='John'))
Explanation: Un records ko find karega jo age 30 se kam hain par name me 'John' nahi contain karta.
select_related()

Description: Performs a SQL join and includes the fields of the related object in the SELECT statement.
Example: Book.objects.select_related('author')
Explanation: Book aur author ko join karega aur related author fields ko bhi fetch karega.
prefetch_related()

Description: Performs a separate lookup for each relationship and performs the 'join' in Python.
Example: Author.objects.prefetch_related('books')
Explanation: Author aur books ke liye alag se queries karega aur join Python me karega.
extra()

Description: Adds extra SQL clauses to the query.
Example: Person.objects.extra(where=['age > 20'])
Explanation: SQL me extra clauses add karega, jaise ki WHERE age > 20.
defer()

Description: Defers the loading of certain fields until they are accessed.
Example: Person.objects.defer('bio')
Explanation: bio field ko initial load me nahi fetch karega, baad me jab zarurat padegi tab fetch karega.
only()

Description: Limits the fields loaded to only those specified.
Example: Person.objects.only('name', 'age')
Explanation: Sirf name aur age fields hi fetch karega, baaki fields ko nahi.
using()

Description: Specifies which database to use for the query.
Example: Person.objects.using('secondary_db')
Explanation: secondary_db database se query perform karega.
select_for_update()

Description: Locks the selected rows until the end of the transaction.
Example: Person.objects.select_for_update()
Explanation: Selected rows ko lock karega taaki doosra transaction tab tak update nahi kar sake jab tak current transaction finish na ho jaye.
raw()

Description: Executes raw SQL queries.
Example: Person.objects.raw('SELECT * FROM myapp_person WHERE age > %s', [20])
Explanation: Raw SQL query execute karega, jaise ki age ke basis pe filter.
QuerySet Methods that Do Not Return Another QuerySet
get()

Description: Retrieves a single object matching the given criteria.
Example: Person.objects.get(pk=1)
Explanation: Primary key 1 wala record return karega. Agar multiple ya no records mile to exception raise hoga.
create()

Description: Creates a new record and returns the created object.
Example: Person.objects.create(name='John', age=25)
Explanation: New Person record create karega aur return karega.
get_or_create()

Description: Retrieves an object if it exists, otherwise creates and returns it.
Example: Person.objects.get_or_create(name='John', age=25)
Explanation: Agar Person record exist karta hai to return karega, nahi to new record create karega aur return karega.
update_or_create()

Description: Updates an existing object or creates a new one if it doesn’t exist.
Example: Person.objects.update_or_create(name='John', defaults={'age': 26})
Explanation: Agar Person record exist karta hai to age update karega, nahi to new record create karega aur age 26 set karega.
bulk_create()

Description: Creates multiple objects in a single query.
Example: Person.objects.bulk_create([Person(name='John', age=25), Person(name='Jane', age=30)])
Explanation: Ek saath multiple Person records create karega.
bulk_update()

Description: Updates multiple objects in a single query.
Example: Person.objects.bulk_update([person1, person2], ['age'])
Explanation: Multiple Person objects ko ek saath update karega, only age field ko.
count()

Description: Returns the number of records matching the QuerySet.
Example: Person.objects.count()
Explanation: Total number of Person records return karega.
in_bulk()

Description: Retrieves a dictionary of objects by their primary keys.
Example: Person.objects.in_bulk([1, 2, 3])
Explanation: Primary keys 1, 2, aur 3 wale records ka dictionary return karega.
iterator()

Description: Returns an iterator that allows efficient looping over large QuerySets.
Example: for person in Person.objects.iterator(): print(person.name)
Explanation: Large QuerySet ko efficiently loop karne ke liye iterator return karega.
latest()

Description: Retrieves the most recent record based on a date field.
Example: Person.objects.latest('created_at')
Explanation: created_at field ke basis pe sabse recent record return karega.
earliest()

Description: Retrieves the earliest record based on a date field.
Example: Person.objects.earliest('created_at')
Explanation: created_at field ke basis pe sabse purana record return karega.
first()

Description: Retrieves the first record from the QuerySet.
Example: Person.objects.first()
Explanation: Pehla record return karega, agar koi record nahi hai to None return karega.
last()

Description: Retrieves the last record from the QuerySet.
Example: Person.objects.last()
Explanation: Last record return karega, agar koi record nahi hai to None return karega.
aggregate()

Description: Performs aggregation operations on the QuerySet.
Example: Person.objects.aggregate(total_age=Sum('age'))
Explanation: age field ki total sum calculate karega.
exists()

Description: Checks if any records match the QuerySet criteria.
Example: Person.objects.filter(name='John').exists()
Explanation: Check karega ki name 'John' ke saath koi record exist karta hai ya nahi.
contains()

Description: Checks if a value is contained within a field.
Example: Person.objects.filter(name__contains='John')
Explanation: name field me 'John' substring ko check karega.
update()

Description: Updates records in the database.
Example: Person.objects.filter(age__lt=30).update(age=30)
Explanation: Age 30 se kam wale records ka age update karega 30 pe.
delete()

Description: Deletes records from the database.
Example: Person.objects.filter(age__lt=30).delete()
Explanation: Age 30 se kam wale records ko delete karega.
as_manager()

Description: Returns a Manager object instead of a QuerySet.
Example: Person.objects.as_manager()
Explanation: Manager object return karega jo QuerySet ke functionalities ko handle karega.
explain()

Description: Provides information about the SQL query execution plan.
Example: Person.objects.filter(age__gt=20).explain()
Explanation: Query ke execution plan ke details dikhayega.
