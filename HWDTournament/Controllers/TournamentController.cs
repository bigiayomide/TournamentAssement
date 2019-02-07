using AutoMapper;
using HWBTournament.API.ViewModels;
using HWBTournament.Data.Contracts;
using HWBTournament.Model.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HWBTournament.API.Controllers
{
    [Produces("application/json")]
    [Route("api/Tournament")]
    [ProducesResponseType(201)]
    [ProducesResponseType(200)]
    [ProducesResponseType(400)]
    public class TournamentController : Controller
    {
        private readonly ITournamentRepository _tournamentRepository;
        private readonly ILoggingRepository _loggingRepository;
        private readonly IMapper _mapper;
        //int page = 1;
        //int pageSize = 10;

        public TournamentController(ITournamentRepository tournamentRepository,
                         ILoggingRepository _errorRepository, IMapper mapper)
        {

            _tournamentRepository = tournamentRepository;
            _loggingRepository = _errorRepository;
            _mapper = mapper;
        }

        [HttpGet("{id}", Name = "GetTournament")]
        public IActionResult Get(long id)
        {
            tournament _tournament = _tournamentRepository.GetSingle(u => u.Id == id);
            if (_tournament != null)
            {
                TournamentViewModel _tournamentVM = _mapper.Map<tournament, TournamentViewModel>(_tournament);
                return new OkObjectResult(_tournamentVM);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        public IActionResult Create([FromBody] TournamentViewModel tournamentvm)
        {
            if (!ModelState.IsValid || tournamentvm == null)
            {
                return BadRequest(ModelState);
            }

            tournament _newTournament = new tournament
            {
               tournament_name  = tournamentvm.tournament_name,
            };

            tournament _newCreatedTournament = _tournamentRepository.CreateTournament(_newTournament);


            if (_newCreatedTournament == null)
            {
                return new OkObjectResult(tournamentvm);
            }

            tournamentvm = new TournamentViewModel
            {
                Id = _newCreatedTournament.Id,
                tournament_name = _newCreatedTournament.tournament_name 
            };

            return new OkObjectResult(tournamentvm);
        }

        [HttpDelete ("{id}")]
        public IActionResult Delete(long id)
        {
            tournament _tournament = _tournamentRepository.GetSingle(u => u.Id == id);
            if (_tournament != null)
            {
                _tournamentRepository.Delete(_tournament);
                _tournamentRepository.Commit();
                TournamentViewModel _tournamentVM = _mapper.Map<tournament, TournamentViewModel>(_tournament);
                return new OkObjectResult(_tournamentVM);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpGet(Name = "GetAllTournaments")]
        public IActionResult GetAllTournaments()
        {
            IEnumerable<tournament> _tournament = _tournamentRepository.GetTournaments();
            if (_tournament != null)
            {
                IEnumerable<TournamentViewModel> _tournamentVM = _mapper.Map<IEnumerable<tournament>, IEnumerable<TournamentViewModel>>(_tournament);
                return new OkObjectResult(_tournamentVM);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPatch]
        public IActionResult Update([FromBody] TournamentViewModel tournamentvm)
        {
            tournament _tournament = _tournamentRepository.GetSingle(u => u.Id == tournamentvm.Id);
            if (_tournament != null)
            {
                _tournament.tournament_name = tournamentvm.tournament_name;
                _tournamentRepository.Update(_tournament);
                _tournamentRepository.Commit();
                TournamentViewModel _tournamentVM = _mapper.Map<tournament, TournamentViewModel>(_tournament);
                return new OkObjectResult(_tournamentVM);
            }
            else
            {
                return NotFound();
            }
        }
    }
}
