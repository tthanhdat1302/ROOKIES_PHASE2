﻿using System.ComponentModel;

namespace RookieOnlineAssetManagement.Models
{
    public enum StateOrderEnum
    {
        [Description("Preparing")]
        Preparing = 0,
        [Description("Shipping")]
        Shipping = 1,
        [Description("Canceled")]
        Canceled = 2,
        [Description("Boom")]
        Boom = 3,

    }
}
