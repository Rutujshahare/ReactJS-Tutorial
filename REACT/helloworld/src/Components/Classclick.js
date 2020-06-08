import React from 'react';

class Classclick extends React.Component
{
    click()
    {
        alert('this is a class function event handler');
    }
    render()
    {
        return (
            <div>
                <button onClick={this.click}>this is a class click</button>
            </div>
        )
    }
}
export default Classclick;