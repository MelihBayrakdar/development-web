using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace SimpleModelsAndRelations.Models
{
    public class Zoo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public List<Animal> Animals { get; set; }
    }
    public class Animal
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }

        public int ZooId { get; set; }
        public Zoo Zoo { get; set; }


        //complete the definition of animal by assigning to it a specie
        //TODO 1: [0.5pt]
        ...
    }

    //complete the definition of Specie, considering that a specie has a Name and a collection of animals that belong to it
    //TODO 2: [1.5pt]
    ...



    public partial class SimpleModelsAndRelationsContext : DbContext
    {
        //complete the definition of Specie, by adding it to the db context
        //TODO 3: [0.5pt]
        ...
        public DbSet<Animal> Animals { get; set; }
        public DbSet<Zoo> Zoo { get; set; }

        public SimpleModelsAndRelationsContext(DbContextOptions<SimpleModelsAndRelationsContext> options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }

    }
}
