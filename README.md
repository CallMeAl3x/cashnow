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
* Provide access to the repo to paradiguet@cashnowmobile.com
* Ensure everything works and there are no typos by thoroughly testing your project. Use your unit tests to check and fix some errors.

Fixed an error in "SecurityController.php" where "last_username" was typed "last_name".

* An end user has indicated that they would prefer to see the latest posts first. Can you make this change?

Added this feature by changing the order from ASCENDING to DESCENDING to get the latest posts.

* An existing feature triggers an email to the author of a post when a comment is added. This feature does not work in dev mode. Can you fix it?

It's because of the config of the dev mode, if you want to enable it you will need to change mailer.yaml to a real dsn and then re-run the project.

* If a user logs in, they are redirected to the admin page, which causes an error if the assigned role is USER. Fix this issue by redirecting to the blog page after login.

Added a check to see if the currently logged-in user has the "ROLE_ADMIN" role. If so, they are redirected to /admin; otherwise, they are redirected to /blog.

* Search does not take into account the tags assigned to posts. Modify it to fix this issue.

Search now takes into account the tags assigned to posts, since we added a leftJoin to also check the Tag table for matches with the search input.

- Added an upload property to the Post entity and updated the database schema using Doctrine migrations.

- Created a FileUploader service to handle file naming and storage logic.

- Updated the blog post form to include a file input, and modified the controller to use the service and persist the uploaded filename.

- Enhanced templates to display the uploaded file and implemented a JavaScript live image preview for improved user experience.

- Images are stored locally in uploads for straightforward integration. For production or more robust needs, consider using AWS S3 or another cloud storage provider.

- Enabled the fileinfo PHP extension on the server to support file uploads.

* Update the README to explain your feature.

Changes made by [Alexandre Bonefons](https://portfolio.bonefons.com)

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
