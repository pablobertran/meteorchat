import {Meteor} from 'meteor/meteor';
import { Factory } from 'meteor/dburles:factory';
import {Accounts} from 'meteor/accounts-base';
import { FlowRouter } from 'meteor/kadira:flow-router';
import {chai, assert, expect} from 'meteor/practicalmeteor:chai';
import { Template } from 'meteor/templating';
import {resetDatabase} from 'meteor/xolvio:cleaner';
import { $ } from 'meteor/jquery';
import { Todos } from '../../../api/todos/todos';
import { withRenderedTemplate } from '../test-helpers';

import '../../../api/users/server/publications';

describe('[Signup Layout]', function () {

});