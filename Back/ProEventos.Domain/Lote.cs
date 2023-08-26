using System;
using System.ComponentModel.DataAnnotations;

namespace ProEventos.Domain
{
    public class Lote
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        [Display(Name = "Preço")]
        public decimal Preco { get; set; }

        [Display(Name = "Data de início")]
        public DateTime? DataInicio { get; set; }

        [Display(Name = "Data de término")]
        public DateTime? DataFim { get; set; }

        public int Quantidade { get; set; }
        
        public int EventoId { get; set; }
        
        public Evento Evento { get; set; }
    }
}