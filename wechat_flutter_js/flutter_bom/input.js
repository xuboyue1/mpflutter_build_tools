// Copyright 2023 MPFlutter Authors. All rights reserved.
// Use of this source code is governed by a Apache-2.0 license that can be
// found in the LICENSE file.

const FlutterMiniProgramMockElement = require('./element').FlutterMiniProgramMockElement

export class FlutterMiniProgramMockInputElement extends FlutterMiniProgramMockElement {
  constructor() {
    super();
    globalThis.FlutterHostView.shared.resetInputValues?.();
  }

  _value = "";

  get value() {
    return this._value;
  }

  set value(v) {
    this._value = v;
    globalThis.FlutterHostView.shared.requireSetInputValue(v);
  }

  get inputmode() {
    return "";
  }

  set inputmode(v) {
    let newValue = v;
    if (newValue === "numeric") {
      newValue = "number";
    } else if (newValue === "decimal") {
      newValue = "digit";
    } else {
      newValue = "text";
    }
    FlutterHostView.shared.requireSetInputType(newValue);
  }

  get enterkeyhint() {
    return "";
  }

  set enterkeyhint(v) {
    FlutterHostView.shared.requireSetConfirmType(v);
  }

  selectionStart = 0;
  selectionEnd = 0;
  setSelectionRange(start, end) {
    FlutterHostView.shared.requireSelectionRange(start, end);
  }
  focus = () => {
    FlutterHostView.shared.requireInputFocus(true);
  };
  blur = () => {
    FlutterHostView.shared.requireInputFocus(false);
  };
  addEventListener = (event, callback) => {
    let self = this;
    if (event === "input") {
      FlutterHostView.shared.oninputinput = function () {
        self.value = arguments[0].detail.value;
        self.selectionStart = arguments[0].detail.cursor;
        self.selectionEnd = arguments[0].detail.cursor;
        callback.apply(callback, arguments);
      };
    } else if (event === "blur") {
      FlutterHostView.shared.oninputblur = callback;
    } else if (event === "keydown") {
      FlutterHostView.shared.oninputkeydown = callback;
    }
  };
}

export class FlutterMiniProgramMockFormElement extends FlutterMiniProgramMockElement {
  focus() {}
  addEventListener = (event, callback) => {};
}
