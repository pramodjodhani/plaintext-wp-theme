const html = htm.bind( wp.element.createElement );

var el = wp.element.createElement;
var registerBlockType = wp.blocks.registerBlockType;

registerBlockType( 'wpwiz/recent-post', {

    title: 'Recent posts block',

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
			
		return el( "div", null , 
					el(wp.components.CheckboxControl , { label: "BSC", checked: Education.includes("BSC") , value: "BSC", onChange: (checked) => EducationChangeFn(checked , "BSC")  }),
					el(wp.components.CheckboxControl , { label: "BE", checked: Education.includes("BE"), value: "BE", onChange: (checked) => EducationChangeFn(checked , "BE")  }),
					el(wp.components.CheckboxControl , { label: "BA", checked: Education.includes("BA"), value: "BA", onChange: (checked) => EducationChangeFn(checked , "BA")  }),
					el(wp.components.CheckboxControl , { label: "MBA", checked: Education.includes("MBA"), value: "MBA", onChange: (checked) => EducationChangeFn(checked , "MBA")  }),
					el(wp.components.CheckboxControl , { label: "LLB", checked: Education.includes("LLB"), value: "LLB", onChange: (checked) => EducationChangeFn(checked , "LLB")  }),
				 ) 
	 	 
	}, 
	save: function() {
		        return null; //handled by php function 
	}

}); //closing registerBlockType
