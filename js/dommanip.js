var create = {
	scriptTag = function(url, params) {
		var scrpt = document.createElement("script");
		if(params.type) {
			scrpt.type = params.type;
		}
		if(params.language) {
			scrpt.language = params.language;
		}
		scrpt.src = url;

		document.getElementsByTagName('head')[0].appendChild(scrpt);
	},

    buttonTag = function(params) {
    	var btn = document.createElement("button");
    	form.type = params.type;
    	if(params.form) {
    		btn.form = params.form;
    	}
    	if(form.type = "submit") {
    		if(params.formaction) {
    		    btn.formaction = params.formaction;
    	    }
    	    if(params.formenctype) {
    	    	btn.formenctype = params.formenctype;
    	    }
    	    if(params.formmethod) {
    	    	btn.formmethod = params.formmethod;
    	    }
    	    if(params.formnovalidate) {
    	    	btn.formnovalidate = params.formnovalidate;
    	    }
    	    if(params.formtarget) {
    	    	btn.formtarget = params.formtarget;
    	    }
    	}
    	if(params.name) {
    		btn.name = params.name;
    	}
    	if(params.value) {
    		btn.value = params.value;
    	}
    	var puthere;
    	if(loc) {
    		puthere = document.querySelectorAll(loc);
    		puthere === Array ? puthere : [puthere];
    		for(var i = 0; i < puthere.length; i++) {
    			puthere[i].appendChild(btn);
    		}
    	} else {
    		puthere = document.getElementsByTagName('head')[0];
    		puthere.appendChild(btn);
    	}
    }
};