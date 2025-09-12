#!/usr/bin/env node

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const cli = yargs(hideBin(process.argv))

cli.command('sum <a> <b>', 'sum two number', {
    a: {
        type: `number`,
        demandOption: true
    },
    b: {
        type: `number`,
        demandOption: true
    }
}, (argv) => {
    console.log (`result: ${argv.a + argv.b}`)
})

cli.command('sub <a> <b>', 'Subtract two numbers', {
    a: {
        type: 'number',
        demandOption: true
    },
    b: {
        type: 'number',
        demandOption: true
    }
}, (argv) => {
    console.log (`result: ${argv.a - argv.b}`)
})

cli.command('mul <a> <b>', 'Multiply two numbers', {
    a: {
        type: 'number',
        demandOption: true
    },
    b: {
        type: 'number',
        demandOption: true
    }
}, (argv) => {
    console.log (`result: ${argv.a * argv.b}`)
})

cli.command('div <a> <b>', 'Divide two numbers', {
    a: {
        type: 'number',
        demandOption: true
    },
    b: {
        type: 'number',
        demandOption: true
    }
}, (argv) => {
    if(argv.b === 0) {
        console.error('Error divide by zero')
        process.exit(1)
    }
    console.log (`result: ${argv.a / argv.b}`)
})

cli.help('h').alias('h','help')
cli.parse();