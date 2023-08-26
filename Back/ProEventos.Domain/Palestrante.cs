using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProEventos.Domain
{
    public class Palestrante
    {
        public int Id { get; set; }

        [Required]
        public string Nome { get; set; }

        [Display(Name = "Mini Cúrriculo")]
        public string MiniCurriculo { get; set; }

        [Required]
        [Display(Name = "Imagem")]
        public string ImagemURL { get; set; }

        [Required]
        public string Telefone { get; set; }

        [Required]
        public string Email { get; set; }
        
        public IEnumerable<RedeSocial> RedesSociais { get; set; }

        public IEnumerable<PalestranteEvento> PalestrantesEventos { get; set; }
    }
}