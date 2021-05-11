using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace RookieOnlineAssetManagement.Entities
{
    public class Returning
    {
        public int Id { get; set; }
        public int AssignmentId { get; set; }
        public int UserAccepteId { get; set; }
        public int UserRequestId { get; set; }
        public DateTime ReturnedDate { get; set; }
        public Assignment Assignment { get; set; }
  
        public virtual User UserAccept { get; set; }
        public StateReturning StateReturning { get; set; }

    }
    public enum StateReturning
    {
        [Description("Waiting for returning")]
        Waitingforreturning = 0,
        [Description("Completed")]
        Completed = 1,

      
    }
}
