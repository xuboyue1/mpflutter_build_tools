// Copyright 2023 MPFlutter Authors. All rights reserved.
// Use of this source code is governed by a Apache-2.0 license that can be
// found in the LICENSE file.

export class FlutterMiniProgramMockElement {
  tagName = "";
  attachShadow = () => {
    return new FlutterMiniProgramMockElement();
  };
  append = () => {
    return {};
  };
  prepend = () => {
    return {};
  };
  insertBefore = () => {
    return {};
  };
  appendChild = () => {
    return {};
  };
  setAttribute = (key, value) => {
    this[key] = value;
  };
  removeAttribute = () => {};
  style = {
    setProperty: () => {},
  };
  querySelectorAll = () => {
    return [];
  };
  sheet = {
    cssRules: [],
    insertRule: () => {
      return 0.0;
    },
  };
  addEventListener = (event, callback) => {
    if (this.tagName === "flutter-view") {
      if (event === "touchstart") {
        FlutterHostView.shared.ontouchstart = callback;
      } else if (event === "touchmove") {
        FlutterHostView.shared.ontouchmove = callback;
      } else if (event === "touchend") {
        FlutterHostView.shared.ontouchend = callback;
      } else if (event === "touchcancel") {
        FlutterHostView.shared.ontouchcancel = callback;
      }
    }
  };
  removeEventListener = () => {};
  getBoundingClientRect = () => {
    return {
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      left: 0,
      top: 0,
      right: 100,
      bottom: 100,
    };
  };
  remove = () => {};
  classList = {
    add: function () {},
  };
}