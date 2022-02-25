import React from 'react'

export default function Checkbox() {
    const Checkbox = React.forwardRef(({ onClick, ...rest }, ref) => (
        <div className="form-check">
          <input
            htmlFor="booty-check"
            type="radio"
            className="form-check-input"
            ref={ref}
            onClick={onClick}
            {...rest}
          />
          <label className="form-check-label" id="booty-check" />
        </div>
      ));
  return Checkbox;
  
}
