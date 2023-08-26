using System.ComponentModel.DataAnnotations;

namespace ProEventos.Application.Dtos
{
    public class LoteDto
    {
        public int Id { get; set; }
        
        public string Nome { get; set; }

        public decimal Preco { get; set; }

        [Display(Name = "Data inicial")]
        public string DataInicio { get; set; }

        [Display(Name = "Data Final")]
        public string DataFim { get; set; }

        public int Quantidade { get; set; }

        public int EventoId { get; set; }
        
        public EventoDto EventoDto { get; set; }

    }
}