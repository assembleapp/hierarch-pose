<img src="./src/logo.svg" height="80" width="120" />

# Hierarch

Make programs, quick and easy.

Build pages using common and easy in-place changes,  
producing clean code you can use in any place you like.

Hierarch records upgrades in your source code as you make changes.

![Basic Use Case](./recordings/basic_use_case.gif)

Machine coding is a hard discipline;  
Hierarch cleans up some rough edges.

Imagine guard rails around your design-and-build process.  
Our program helps people build pages online,  
as solid and reliable as can be.

## An Engine in an Early Phase

As Hierarch grows and changes,  
you'll be able to do more with less.  
Keep your eye on our [discussions].

## Run on a local machine

```bash
git clone https://github.com/assembleapp/hierarch
cd hierarch
yarn

# Run in parallel:
node hierarch &
yarn go
```

In your browser, see <http://0.0.0.0:3000>.  
Click the cube, then press spacebar and secondary-click your mouse.  
Click around your page and make changes,  
keeping an eye on your code in `src/App.js`.

## Run a packaged sandbox on a docker-enabled machine

Use a `.env` file like so:

```
DOMAIN=raspberrypi.local
HIERARCH_CHANNEL=4321
PACKAGE_CHANNEL=3000
```

Launch one container, with ports matching the channels in `.env`

```
sudo docker run --env-file .env -p 3000:3000 -p 4321:4321 -it --rm assemble/hierarch yarn go
```

Launch a second process in the same container, making hierarch's magic run.

```
sudo docker exec suspicious_curie /usr/local/bin/node hierarch
```

The process will launch, reading `DOMAIN` and ...`_CHANNEL` values,
and prepare a packaged webpage so consumers can play around in a sandbox online.
When you're done, run `sudo docker kill suspicious_curie`
and all changes will be erased.

## License

During our build phase,  
Assemble's Hierarch engine code is open-source and unlicensed.  
Use of this unlicensed code is dangerous.

No legal permission is expressed for our code's use,  
because we need more secure policies and boundaries programmed in.

If you would like to use this engine to build a program,  
please leave a remark in the [discussions] describing your build goals.

[discussions]: https://github.com/assembleapp/hierarch/discussions

## Background

Hierarch is made by Assemble LLC, a Michigan-based company led by @c4lliope.

### Prior explorations

* https://github.com/assembleapp/assemble
* https://github.com/assembleapp/base
* https://github.com/assembleapp/slim
* https://github.com/assembleapp/engine
* https://github.com/assembleapp/assembleapp.co
* https://github.com/assembleapp/bass
* https://github.com/assembleapp/assembled
* https://github.com/assembleapp/assembled.0
* https://github.com/assembleapp/snake
* https://github.com/assembleapp/donors
