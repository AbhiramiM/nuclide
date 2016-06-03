

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

var Actions = Object.freeze({
  SET_DEBUGGER_INSTANCE: 'SET_DEBUGGER_INSTANCE',
  SET_ERROR: 'SET_ERROR',
  ADD_SERVICE: 'ADD_SERVICE',
  REMOVE_SERVICE: 'REMOVE_SERVICE',
  SET_PROCESS_SOCKET: 'SET_PROCESS_SOCKET',
  DEBUGGER_MODE_CHANGE: 'DEBUGGER_MODE_CHANGE',
  ADD_DEBUGGER_PROVIDER: 'ADD_DEBUGGER_PROVIDER',
  REMOVE_DEBUGGER_PROVIDER: 'REMOVE_DEBUGGER_PROVIDER',
  UPDATE_CONNECTIONS: 'UPDATE_CONNECTIONS',
  ADD_EVALUATION_EXPRESSION_PROVIDER: 'ADD_EVALUATION_EXPRESSION_PROVIDER',
  REMOVE_EVALUATION_EXPRESSION_PROVIDER: 'REMOVE_EVALUATION_EXPRESSION_PROVIDER',
  ADD_WATCH_EXPRESSION: 'ADD_WATCH_EXPRESSION',
  REMOVE_WATCH_EXPRESSION: 'REMOVE_WATCH_EXPRESSION',
  UPDATE_WATCH_EXPRESSION: 'UPDATE_WATCH_EXPRESSION'
});

module.exports = {
  Actions: Actions
};