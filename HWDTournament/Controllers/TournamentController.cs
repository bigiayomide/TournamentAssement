using AutoMapper;
using HWBTournament.API.ViewModels;
using HWBTournament.Data.Contracts;
using HWBTournament.Model.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Serilog;
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
    [ProducesResponseType(401)]
    [ProducesResponseType(404)]
    //[Authorize]
    public class TournamentController : Controller
    {
        private readonly ITournamentRepository _tournamentRepository;
        private readonly IMapper _mapper;
        //int page = 1;
        //int pageSize = 10;

        public TournamentController(ITournamentRepository tournamentRepository, IMapper mapper)
        {
            _tournamentRepository = tournamentRepository;
            _mapper = mapper;
        }

        [HttpGet("{id}")]
        public IActionResult Get(long id)
        {
            Tournament _tournament = _tournamentRepository.GetSingle(u => u.Id == id);
            if (_tournament != null)
            {
                TournamentViewModel _tournamentVM = _mapper.Map<Tournament, TournamentViewModel>(_tournament);
                Log.Information("Tournament {@_tournamentVM} retrieved from database", _tournamentVM);
                return new OkObjectResult(new ResultVM() { Status = Status.Success, Data = _tournamentVM });
            }
            else
            {
                Log.Information("Could not find Tournament wit Id  {@id}", id);
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
            Tournament _newtournament= _mapper.Map<TournamentViewModel,Tournament>(tournamentvm);


            Tournament _newCreatedTournament = _tournamentRepository.CreateTournament(_newtournament);
            _tournamentRepository.Commit();

            if (_newCreatedTournament == null)
            {
                Log.Information("Error Inserting Tournament {@tournamentvm} Into database", tournamentvm);
                return NotFound(new ResultVM() { Status= Status.Error, Message= "An Error Occuered Could not create Tournament "+tournamentvm.tournament_name, Data = tournamentvm });
            }

            tournamentvm = _mapper.Map<Tournament, TournamentViewModel>(_newCreatedTournament);
            Log.Information("Tournament {@tournamentvm} Inserted from database", tournamentvm);
            return new OkObjectResult(new ResultVM() { Status = Status.Success, Message = "Succesfully Created Tournament: " + tournamentvm.tournament_name, Data = tournamentvm });
        }

        [HttpDelete ("{id}")]
        public IActionResult Delete(long id)
        {
            Tournament _tournament = _tournamentRepository.GetSingle(u => u.Id == id);
            if (_tournament != null)
            {
                _tournamentRepository.Delete(_tournament);
                _tournamentRepository.Commit();
                TournamentViewModel _tournamentVM = _mapper.Map<Tournament, TournamentViewModel>(_tournament);
                Log.Information("Tournament {@_tournamentVM} Deleted from database", _tournamentVM);
                return new OkObjectResult(new ResultVM() { Status = Status.Success, Message = "Succesfully Deleted Tournament: " + _tournamentVM.tournament_name, Data = _tournamentVM });
            }
            else
            {
                Log.Information("Error Occured Deleting Tournament from database");
                return NotFound(new ResultVM() { Status = Status.Error, Message = "An Error Occured: ", Data = null });
            }
        }

        [HttpGet]
        public IActionResult GetAllTournaments()
        {
            IEnumerable<Tournament> _tournament = _tournamentRepository.GetTournaments();
            if (_tournament != null)
            {
                IEnumerable<TournamentViewModel> _tournamentVM = _mapper.Map<IEnumerable<Tournament>, IEnumerable<TournamentViewModel>>(_tournament);
                Log.Information("Tournament {@_tournamentVM} retrieved from database", _tournamentVM);
                return new OkObjectResult(new ResultVM() {Data = _tournamentVM, Status =Status.Success});
            }
            else
            {
                Log.Information("Error Occured Retrieving Tournaments from database");
                return NotFound(new ResultVM() { Data = "An Error Occured", Status = Status.Error });
            }
        }

        [HttpPatch]
        public IActionResult Update([FromBody] TournamentViewModel tournamentvm)
        {
            Tournament _tournament = _tournamentRepository.GetSingle(u => u.Id == tournamentvm.Id);
            if (_tournament != null)
            {
                Tournament _newtournament = _mapper.Map(tournamentvm, _tournament);
                _tournamentRepository.Update(_newtournament);
                _tournamentRepository.Commit();
                TournamentViewModel _tournamentVM = _mapper.Map<Tournament, TournamentViewModel>(_tournament);
                Log.Information("Tournament {@_tournamentVM} Updated to database", _tournamentVM);
                return new OkObjectResult(new ResultVM() { Data = _tournamentVM, Status = Status.Success });
            }
            else
            {
                Log.Information("Error Occured Updating Tournament {@tournamentvm}", tournamentvm);
                return NotFound(new ResultVM() { Data = "An Error Occured", Status = Status.Error });
            }
        }
    }
}
