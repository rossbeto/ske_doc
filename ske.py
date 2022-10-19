from contextlib import contextmanager
from os import path as osp

import click
import subprocess
import os

base_dir = osp.dirname(__file__)

@click.group(
    chain=True,
    context_settings={'help_option_names': ['-h', '--help']})
def cli():
    pass

@cli.command('echo')
def cli_echo():
    click.echo(f'ping base_dir:{base_dir}')


@cli.command('bash')
def cli_bash():
    cmd = [
        'poetry',
        'shell'
    ]
    status = subprocess.call(cmd)
    raise SystemExit(status)


@cli.command()
def serve():
    with cd(base_dir):
        run(['./gendoc'])
        run(['cp', './public/petstore.html', './doc'])
        run(['mkdocs', 'serve', '-a', '0.0.0.0:8082', '--strict'])


@cli.command()
def build():
    with cd(base_dir):
        run(['mkdocs', 'build', '--strict'])
        # run(['mkdocs', 'build'])
        run(['./gendoc'])


@contextmanager
def cd(dirname):
    prev_dir = os.getcwd()
    print(f'$ cd {dirname}')
    os.chdir(base_dir)
    try:
        yield
    finally:
        print(f'$ cd {prev_dir}')
        os.chdir(prev_dir)


def run(cmd):
    cmdline = subprocess.list2cmdline(cmd)
    print(f'$: {cmdline}')
    error = subprocess.call(cmd)

    if error:
        raise SystemExit(error)


if __name__ == '__main__':
    cli(prog_name='ske')