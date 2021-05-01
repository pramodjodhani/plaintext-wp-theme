const html = htm.bind( wp.element.createElement );
var el = wp.element.createElement;
var registerBlockType = wp.blocks.registerBlockType;


registerBlockType( 'wpwiz/recent-post', {

    title: 'Recent posts Slider',

    icon: 'universal-access-alt',

    category: 'common',
	
	attributes:  {"Education":{"type":"array"}} ,


	edit: function(props) {

		let Education = props.attributes.Education || []; 

		function EducationChangeFn(isChecked, value) {
			
			console.log(isChecked, value)		
			if(isChecked) {
				if(! Education.includes(value)) {
					console.log(value+" include nhi krta, will push in the array ")
					Education.push(value)
				}
			}
			else {
				let index = Education.indexOf(value)
				Education.splice(index,1);
			}
			
			props.setAttributes({Education: Education})
			console.log(props.attributes);

		}
			

		return html`<div >
						<h1>bhai bhai bhai</h1>
					</div>`
	 	 
	}, 
	save: function() {
		        return null; //handled by php function 
	}

}); //closing registerBlockType
