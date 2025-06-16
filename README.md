![img.png](img.png) <br>Symfony Test Application
========================

The "Symfony CashNow Test Application" is a reference application created to test your
ability to adapt to a new technical environment, based on the architecture of our project
to develop applications following the [Symfony Best Practices][1].

You can also learn about these practices in [the official Symfony Book][5].

Requirements
------------

  * PHP 8.2.0 or higher;
  * PDO-SQLite PHP extension enabled;
  * and the [usual Symfony application requirements][2].

Installation
------------

Install our project "Symfony Test Application"  :


```bash

# ...or you can clone the code repository and install its dependencies
git clone git@github.com:CashNowMobile/cashnow_test.git cashnow_test
```

Usage
-----

There's no need to configure anything before running the application. There are
2 different ways of running this application depending on your needs:
**Option 1.** [Download Symfony CLI][4] and run this command:
```bash
cd cashnow_test/
symfony serve


```

Then access the application in your browser at the given URL (<https://localhost:8000> by default).

**Option 2.** Use a web server like Nginx or Apache to run the application
(read the documentation about [configuring a web server for Symfony][3]).

On your local machine, you can run this command to use the built-in PHP web server:

```bash
cd cashnow_test/
php -S localhost:8000 -t public/
```

Tests
-----

* Install the Symfony project in your local environment, naming the project cashnow_test.
* Create a personal git repo (gitlab, github, ...) with the original project. Create a branch for the test.
* Provide access to the repo to orey@cashnowmobile.com
* Ensure everything works and there are no typos by thoroughly testing your project. Use your unit tests to check and fix some errors.
* An end user has indicated that they would prefer to see the latest posts first. Can you make this change?
* An existing feature triggers an email to the author of a post when a comment is added. This feature does not work in dev mode. Can you fix it?
* If a user logs in, they are redirected to the admin page, which causes an error if the assigned role is USER. Fix this issue by redirecting to the blog page after login.
* Search does not take into account the tags assigned to posts. Modify it to fix this issue.
* Add the ability to upload a file to the post object, based on a service (we will also use the commands make:entity to modify the Post entity, make:migration , and doctrine:migration:migrate
  to update the database).
* Update the README to explain your feature.

```bash
cd cashnow_test/
./bin/phpunit
```

GOOD LUCK :)

[1]: https://symfony.com/doc/current/best_practices.html
[2]: https://symfony.com/doc/current/setup.html#technical-requirements
[3]: https://symfony.com/doc/current/setup/web_server_configuration.html
[4]: https://symfony.com/download
[5]: https://symfony.com/book
[6]: https://getcomposer.org/
