using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RookieOnlineAssetManagement.Entities
{
    public class Assignment
    {
        public int Id { get; set; }
        public string AssetId { get; set; }
        public int BorrowerId { get; set; }
        public int LenderId { get; set; }
        public DateTime AssignedDate { get; set; }
        public string Note { get; set; }
        public virtual Asset Asset { get; set; }
        [ForeignKey("BorrowerId")]
        [InverseProperty("BorrowerAssets")]
        public virtual User Borrower { get; set; }
        [ForeignKey("LenderId")]
        [InverseProperty("LenderAssets")]
        public virtual User Lender { get; set; }
        public StateAssignment StateAssignment { get; set; }

    }
    public enum StateAssignment
    {
        [Description("Waiting for returning")]
        Waitingforreturning = 0,
        [Description("Completed")]
        Completed = 1,


    }
}
