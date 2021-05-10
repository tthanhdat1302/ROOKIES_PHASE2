using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using RookieOnlineAssetManagement.Entities;

namespace RookieOnlineAssetManagement.Data
{
    public class ApplicationDbContext : IdentityDbContext<User, IdentityRole<int>, int>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<Asset> Assets { get; set; }
        public DbSet<Assignment> Assignments { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Returning> Returnings { get; set; }
        public DbSet<User> Users { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Assignment>()
                .HasOne(p => p.Borrower)
                .WithMany(c => c.BorrowerAssets)
                .HasForeignKey(m => m.BorrowerId)
                .OnDelete(DeleteBehavior.Restrict)
                .IsRequired();

            modelBuilder.Entity<Assignment>()
               .HasOne(p => p.Lender)
               .WithMany(c => c.LenderAssets)
               .HasForeignKey(m => m.LenderId)
               .OnDelete(DeleteBehavior.Restrict)
               .IsRequired();
            modelBuilder.Entity<Returning>()
               .HasOne(p => p.UserAccept)
               .WithMany(c => c.UserAcceptAssets)
               .HasForeignKey(m => m.UserAccepteId)
               .OnDelete(DeleteBehavior.Restrict)
               .IsRequired();
        }
    }
}
