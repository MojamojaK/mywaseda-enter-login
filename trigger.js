// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

window.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		if (document.getElementById('j_username') === document.activeElement || 
			document.getElementById('j_password') === document.activeElement)
			document.getElementById('btn-save').click()
			event.preventDefault()
	}
})
