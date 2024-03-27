//@ts-ignore
import React from 'react';
import { P3Primaries } from 'three'
//@ts-ignore
import ED_webp from 'src/public/ED.webp';
////////////////////////////////////////////////////////////////////////////////////////////////////




const Test = () => {
	return (
		<>
			<div className='container max-w-[1700px] mx-auto'>
				<div className='wrapper mx-auto'>
					<div className='text-red-500 p-[5px]'>Content1</div>
			
					<img
              src={ED_webp}
              alt="#"
              className="text-white"
            />
				</div>
			</div>

		</>
	);
};

export default Test;
