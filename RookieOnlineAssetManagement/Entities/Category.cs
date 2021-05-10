using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace RookieOnlineAssetManagement.Entities
{
    public class Category
    {
        [Key]
        public string Id { get; set; }
        public string CategoryName { get; set; }

        public string Prefix { get; set; }
        public virtual ICollection<Asset> Assets { get; set; }
    }
}