# Yeoman PHP CLI app generator

A Yeoman generator to quickly scaffold a PHP CLI app based on [Symfony's Console component](http://symfony.com/doc/current/components/console/introduction.html). Generates one command with a fixed name. See the roadmap.md file for planned additions.

## Installation

If you don't already have it installed, install [Yeoman](http://yeoman.io).

```js
npm install -g yo
```

Install the generator

```js
npm install -g generator-php-cli-app
```

## Using the generator

Make a new directory, and `cd` into it:

```js
mkdir foobar && cd $_
```

Run `yo php-cli-app` or `yo` and select the `Php Cli App` generator.

## Contributing

Please [submit an issue](https://github.com/gverschuur/generator-php-cli-app/issues) or a [pull request](https://github.com/gverschuur/generator-php-cli-app/pulls).

```bash
mypackage:command
|--
```

```php
use <%=PHP_NAMESPACE%>\Command\<%=APP_NAMESPACE%>\<%=COMMAND_NAME%>;
```

$application = new Application('<%=APPLICATION_NAME%>', '<%=APPLICATION_VERSION%>');
$application->add(new <%=PHP_CLASSNAME%>());
