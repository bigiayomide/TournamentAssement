using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace HWBTournament.Model
{
    public class PrecisionAndScaleAttribute : RegularExpressionAttribute
    {
        public PrecisionAndScaleAttribute(int precision, int scale) : base($@"^(0|-?\d{{0,{precision - scale}}}(\.\d{{0,{scale}}})?)$")
        {

        }
    }
}
