$("#accordion").accordion({event: 'mouseover', collapsible: true});

$("#drag").draggable({containment: "document"});

$("#drop").droppable({containment: "#drop", 

		drop: function() {
				$( this )
					.addClass( "border" )
					.find( "p" )
						alert( "Dropped!" );}
});