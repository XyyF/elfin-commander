const initShell = require('../../src/external/init');
const shell = require('shelljs');

describe('elfincmd external init ', () => {
    it('第一次执行init', async () => {
        shell.echo = jest.fn();

        await initShell();

        expect(shell.echo).toBeCalledTimes(3);
        expect(shell.echo).toHaveBeenCalledWith('end elfincmd external init');
        expect(shell.echo).toHaveBeenCalledWith('external init file: .elfin.external.js');
        expect(shell.echo).toHaveBeenCalledWith('end elfincmd external init');
    });

    it('再次执行init', async () => {
        shell.echo = jest.fn();

        await initShell();

        expect(shell.echo).toBeCalledTimes(3);
        expect(shell.echo).toHaveBeenCalledWith('end elfincmd external init');
        expect(shell.echo).toHaveBeenCalledWith('\x1B[43m\x1B[30m WARNING \x1B[0mexternal init file exist');
        expect(shell.echo).toHaveBeenCalledWith('end elfincmd external init');
    });
});
