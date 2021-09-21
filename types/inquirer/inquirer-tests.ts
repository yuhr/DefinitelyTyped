import { Separator } from 'inquirer';
import inquirer = require('inquirer');
import InputPrompt = require('inquirer/lib/prompts/input');
import { fetchAsyncQuestionProperty } from 'inquirer/lib/utils/utils';
import incrementListIndex = require('inquirer/lib/utils/incrementListIndex');
import Choices = require('inquirer/lib/objects/choices');

{
    new inquirer.Separator('');
    const promptModule = inquirer.createPromptModule();
    promptModule.prompts['']; // $ExpectType PromptConstructor
    promptModule.registerPrompt('', InputPrompt); // $ExpectType PromptModule
    promptModule.restoreDefaultPrompts();
}
{
    inquirer.prompt([
        {
            message: '',
            default: '',
        },
    ]);
}
{
    new inquirer.ui.BottomBar();
    new inquirer.ui.Prompt(inquirer.prompt.prompts);
}
{
    const checkBoxQuestion: inquirer.CheckboxQuestion = {
        type: 'checkbox',
    };

    const listQuestion: inquirer.ListQuestion = {
        type: 'list',
    };

    const rawListQuestion: inquirer.RawListQuestion = {
        type: 'rawlist',
    };

    const expandQuestion: inquirer.ExpandQuestion = {
        type: 'expand',
    };

    // $ExpectError
    expandQuestion.loop;
    // $ExpectType boolean
    rawListQuestion.loop!;
    // $ExpectType boolean
    checkBoxQuestion.loop!;
    // $ExpectType boolean
    listQuestion.loop!;
}
{
    inquirer.prompt<Partial<any>>([
        {
            filter(input, answers) {
                // $ExpectType any
                input;
                // $ExpectType Partial<any>
                answers;
            },
        },
    ]);
}
{
    let choice: inquirer.DistinctChoice;

    choice = {
        type: 'separator',
        line: 'This is a test',
    };

    if (choice.type === 'separator' && !(choice instanceof Separator)) {
        // $ExpectType SeparatorOptions
        choice;
    }
}

interface ChalkQuestionOptions<T extends inquirer.Answers = inquirer.Answers> extends inquirer.InputQuestionOptions<T> {
    previewColors: boolean;
}

interface ChalkQuestion<T extends inquirer.Answers = inquirer.Answers> extends ChalkQuestionOptions<T> {
    type: 'chalk';
}

class ChalkPrompt extends InputPrompt {
    /* stuff */

    protected onKeypress() {}
}

inquirer.registerPrompt('chalk', ChalkPrompt);

declare module 'inquirer' {
    interface QuestionMap<T> {
        chalk: ChalkQuestion<T>;
    }
}

inquirer.prompt([
    {
        type: 'chalk',
        previewColors: true,
    },
]);

inquirer.prompt(
    [
        {
            name: 'foo',
            default: 'bar',
        },
    ],
    {
        foo: 'baz',
    },
);

fetchAsyncQuestionProperty(
    {
        name: 'foo',
        default: 'bar',
    },
    'message',
    {},
).pipe(source => {
    return source;
});

{
    const options = {
        name: 'foo',
        loop: true,
        choices: new Choices([{ name: 'foo' }], {}),
    };

    // $ExpectType number
    incrementListIndex(0, 'up', options);
    // $ExpectError
    incrementListIndex('notANumber', 'up', options);
    // $ExpectError
    incrementListIndex(0, 'left', options);
    // $ExpectError
    incrementListIndex(0, 'up', {});
}
