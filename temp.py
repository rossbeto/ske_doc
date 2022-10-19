import click

@click.command('echo')
def cli_echo():
    click.echo('ping')

if __name__ == '__main__':
    cli_echo()