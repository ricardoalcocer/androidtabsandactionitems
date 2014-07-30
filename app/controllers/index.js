Alloy.Globals.tabGroup=$.index;
Alloy.Globals.currentTab=0;

function doopen(evt){
	var activity = evt.source.getActivity();

	activity.onCreateOptionsMenu = function(e) {
		var item, menu;
		menu = e.menu;
		menu.clear();
		
		switch(Alloy.Globals.currentTab){
			case 0:
				item = e.menu.add({
					title : "Invite",
					showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS,
					icon : Ti.Android.R.drawable.ic_menu_search
				});

				item.addEventListener("click", function(e) {
					$.win1.label.text='You clicked the magnifying glass';
				});
				
				break;
			case 1:
				item1 = e.menu.add({
					title : "Share",
					showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS,
					icon : Ti.Android.R.drawable.ic_menu_edit
				});

				item2 = e.menu.add({
					title : "Share",
					showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS,
					icon : Ti.Android.R.drawable.ic_menu_send
				});
				item2.addEventListener("click", function(e) {					
					$.win2.label.text='You clicked the send button';
				});

				
				break;
		}
	}

	Alloy.Globals.tabGroup.addEventListener("focus", function(evt) {
		if (typeof evt.index !== "undefined"){
			activity.invalidateOptionsMenu();
			Alloy.Globals.currentTab=evt.index;	
		} 
	});
}

$.index.open();
